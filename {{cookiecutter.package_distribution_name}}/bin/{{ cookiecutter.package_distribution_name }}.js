#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path');

const program = new Command();

program
    .version('0.0.1')
    .description('A simple CLI for generating a Node.js project using cookiecutter');

program
    .command('create <project_name>')
    .alias('c')
    .description('Create a new Node.js project')
    .action((project_name) => {
        console.log(`Creating a new Node.js project called ${project_name}`);
        const projectPath = path.join(process.cwd(), project_name);
        console.log(`Creating project at ${projectPath}`);
        process.exit(0);
    });