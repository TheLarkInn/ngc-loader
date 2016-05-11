import 'ts-metadata-collector';
import 'reflect-metadata';
import {lstatSync} from 'fs';
import {CodeGenerator, MetadataWriterHost, NodeReflectorHost, TsickleHost} from '@angular/compiler-cli';
import {singleTsc} from './single_tsc';

var ngCompiler = require('@angular/compiler-cli/main.js');
var fs = require('fs');
var ts = require('typescript');
var path = require('path');

function ngcLoader(source) {
  var compiler = this._compiler,
      compilation = this._compilation;
  
  this.cacheable && this.cacheable();
  

  singleTsc.readConfiguration(compiler.context, compiler.context);
  
  return singleTsc.recieveAndEmitSingle(source);
}

export default ngcLoader; 