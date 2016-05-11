import 'ts-metadata-collector';
import 'reflect-metadata';
import {lstatSync} from 'fs';

var path = require('path');
var fs = require('fs');
var path = require('path');
var ts = require('typescript');


var ngCompiler = require('@angular/compiler-cli/main.js');
import {CodeGenerator, MetadataWriterHost, NodeReflectorHost, TsickleHost} from '@angular/compiler-cli';
import {singleTsc} from './single_tsc';


var ngcLoader = function(source) {
  var compiler = this._compiler;
  var compilation = this._compilation;
  
  debugger;
  this.cacheable && this.cacheable();
  
  
  singleTsc.readConfiguration(compiler.context, compiler.context);
  
  return singleTsc.recieveAndEmitSingle(source);
}




export default ngcLoader; 