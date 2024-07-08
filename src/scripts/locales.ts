export function getStaticPaths () {
    return [
       {params: {lang: 'en-US'}},
       {params: {lang: 'uk'}},
     ];
   }