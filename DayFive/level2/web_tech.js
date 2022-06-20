const web_tech = ['Android', 'Web Development', 'Machine Learning', 'Augmented Reality']

// export{web_tech}

let techIndex = web_tech.indexOf('Ethiopia')

if(techIndex == -1){
    web_tech.push('Sass')
    console.log(web_tech)
}else{
    console.log('Sass is a CSS preprocess')
}