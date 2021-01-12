const fs = require('fs');
const path = require('path');

class delimiterFileLogger {
  constructor({ fileName, fields, delimiter, ws, fileMode }) {
    this.fileName = fileName;
    this.fields = fields;
    this.ws = ws;
    this.delimiter = delimiter;
    let line = '';
    if(fileMode!=='append') {
      fields.forEach((field, index) => {
        if (index < fields.length - 1)
          line = line + field + this.delimiter;
        else line = line + field + '\n';
      });
      this.ws.write(line)
    }

  }

  addNewRecordFromArray(record) {
    if (record?.length !== this.fields.length) throw new Error('fields number doesnt match or wrong input');
    let line = '';
    record.forEach((field, index) => {
      if (index < record.length - 1)
        line = line + field + this.delimiter;
      else line = line + field + '\n';
    });
    this.ws.write(line);
  }

  addRecordFromObject() {

  }

  closeAndRemove() {

  }

  close() {
    this.ws.close();
  };

}

const types = {
  delimiterFileLogger: 'delimiterFileLogger'
};
const defaultOptions = {
  append: false,
  replace: false,
  fileMode : 'addNew',
  fields: {},
  fileName: '',
  dirName: '/logs/',
  delimiter: ','
};

module.exports = {

  createLogger: (type, options = defaultOptions) => {
    //Do not use _ at the end of filename (before dot)
    const wsOptions = {};
    const opt = Object.assign({}, defaultOptions, options);
    const { fileMode, dirName } = opt;
    let { fileName } = opt;
    if (!fileName) throw new Error('fileName is required');
    if (fileName.indexOf('/') > -1) throw Error('Filename can\'t contain / sign');
    if (fileName.indexOf('.') === -1) throw Error('Filename must have an extension');
    if (!fs.existsSync(path.join(__dirname, dirName))) {
      fs.mkdirSync(path.join(__dirname, dirName));
    }
    if (fileMode === 'addNew') {

      let isExists = fs.existsSync(path.join(__dirname, dirName, fileName));
      while (isExists) {

        if (isExists) {
          const [name, ext] = fileName.split('.');
          const words = name.split('_');
          if (isNaN(Number(words[words.length - 1]))) {
            words.push(0);
          }
            // else if (Number(words[words.length - 1]) === 0 && words.length > 1) {
            //   delete words[words.length - 1]
          // }
          else {
            words[words.length - 1] = Number(words[words.length - 1]) + 1;
          }
          options.fileName = fileName = words.join('_') + '.' + ext;
        }
        isExists = fs.existsSync(path.join(__dirname, dirName, fileName));
      }
    }
    if (fileMode==='append') wsOptions.flags ='a';




    const ws = fs.createWriteStream(
      path.join(__dirname, dirName, fileName),
      wsOptions
    );
    opt.ws = ws;
    if (type === types.delimiterFileLogger) {
      return new delimiterFileLogger(opt);
    } else {
      return new delimiterFileLogger(opt);
    }

  },
  types
};


