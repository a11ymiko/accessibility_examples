import fs from 'fs';

//functionality for listing all pages in Sitemap 
    function sitemap(){
      const testFolder = './good/';
      // const fs = require('fs');
      
      fs.readdirSync(testFolder).forEach(file => {
        console.log(file);
      });
      }
