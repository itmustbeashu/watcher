const http = require('http');
http.createServer().listen(3000); 

const chokidar = require('chokidar');

const watcher = chokidar.watch('watch-folder',{
    persistent: false,
    ignoreInitial: true,
    ignored: [ 'watch-folder/ignore-1.txt', 'watch-folder/ignore-2.txt' ],
    ignorePermissionErrors: false,
    interval: 100,
    binaryInterval: 300,
    disableGlobbing: false,
    enableBinaryInterval: true,
    useFsEvents: false,
    usePolling: false,
    atomic: true,
    followSymlinks: true,
    awaitWriteFinish: false
})

watcher.on('ready',()=>{
    console.log("I am ready to watch files")
})

// Whenever file is added
watcher.on('add',path => {
    console.log(path,'File Path .......')
})

// Whenever file is deleted

watcher.on('unlink',path=>{
    console.log(path,"File is removed .....")
})

// Whenever file is changed

watcher.on('change',path=>{
    console.log(path,'Content change in the file');
})

// To handle error

watcher.on('error',error =>{
    console.log(error);
})

