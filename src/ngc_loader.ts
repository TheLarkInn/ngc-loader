import 'ts-metadata-collector';
import 'reflect-metadata';

var path = require('path');
var fs = require('fs');
var path = require('path');
var ts = require('typescript');


var ngCompiler = require('@angular/compiler-cli/main.js');
import {CodeGenerator, MetadataWriterHost, NodeReflectorHost, TsickleHost} from '@angular/compiler-cli';
import {singleTsc} from './single_tsc.ts';


var ngcLoader: Function = (source: string): string => {  
  this.cacheable && this.cacheable();

  console.log(this);

  // singleTsc.readConfiguration()
  
  return singleTsc.recieveAndEmitSingle(source);
}




export default ngcLoader; 