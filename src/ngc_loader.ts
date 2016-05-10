import 'ts-metadata-collector';
import 'reflect-metadata';

var path = require('path');
var fs = require('fs');
var path = require('path');
var ts = require('typescript');
var tsc = require('./tsc');

var ngCompiler = require('@angular/compiler-cli/main.js');
import {CodeGenerator, MetadataWriterHost, NodeReflectorHost, TsickleHost} from '@angular/compiler-cli';

var ngcLoader: Function = (source: string): string => {  
  this.cacheable && this.cacheable();

  
  
  return source;
}




export default ngcLoader; 