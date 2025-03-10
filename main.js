import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';

let basepath = "D:\\WebDev\\1. CWH sigma\\backend\\53. exercise 15";

async function organize(){
    
    let filesArray = await fs.readdir('./');
    
    for (const item of filesArray) {
        
        console.log("running for "+item);

        let ext = item.split('.').pop();
        let folder=path.join(basepath,ext);
        let oldpath = path.join(basepath,item);
        let newpath = path.join(basepath,ext,item);

        if( (item.split('.').length > 1)&&(ext != 'js') && (ext!='json') ){
            if(fsn.existsSync(folder)){
                await fs.rename(oldpath, newpath);
            }else{
                fsn.mkdirSync(ext);
                await fs.rename(oldpath, newpath);
            }
        }
    }
    
}

organize();
