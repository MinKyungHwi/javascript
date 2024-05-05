var member = ['min', 'kyung', 'hwi'];
console.log(member[1]);

var i = 0;
while (i < member.length) {
  console.log('array',member[i]);
  i = i + 1;
}

var roles = {
  'programer' : 'min',
  'designer' : 'kyung',
  'manager' : 'Hwi'
}

console.log(roles.designer);
console.log(roles['designer']);


for(var name in roles){
  console.log('object => ', name, 'value => ', roles[name]);
}
