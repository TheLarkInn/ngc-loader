import * as ts from 'typescript';
import * as path from 'path';
import {Tsc, check} from '@angular/compiler-cli/tsc';
import {lstatSync} from 'fs';

export class SingleTsc extends Tsc {
  // Make sure that this.readConfiguration() is performed from outside
  public parsedSingle: ts.TranspileOutput;
  public parsed: ts.ParsedCommandLine;
  private basePath: string;

  readConfiguration(project: string, basePath: string) {
    this.basePath = basePath;

    // Allow a directory containing tsconfig.json as the project value
    if (lstatSync(project).isDirectory()) {
      project = path.join(project, "tsconfig.json");
    }

    const {config, error} = ts.readConfigFile(project, ts.sys.readFile);
    check([error]);

    // this.parsed =
    //     ts.parseJsonConfigFileContent(config, {readDirectory: ts.sys.readDirectory}, basePath);
    // check(this.parsed.errors);
    // Default codegen goes to the current directory
    // Parsed options are already converted to absolute paths
    this.ngOptions = config.angularCompilerOptions || {};
    this.ngOptions.genDir = path.join(basePath, this.ngOptions.genDir || '.');
    return {parsed: this.parsed, ngOptions: this.ngOptions};
  }

  recieveAndEmitSingle(source: string) {
	// destructure config and error vars and check for errors
	// const {config, error} = ts.readConfigFile(project, ts.sys.readFile);
	// check([error]);

	// parse individual
  	this.parsedSingle = ts.transpileModule(source, this.parsed.options); 
  	check(this.parsedSingle.diagnostics);

    this.ngOptions.genDir = path.join(this.basePath, this.ngOptions.genDir || '.');
    return this.parsedSingle.outputText;
  }
}

export var singleTsc: SingleTsc = new SingleTsc();