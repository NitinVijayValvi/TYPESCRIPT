function checkAlphanumeric(s:string){
	return s.match(/^[A-Za-z0-9]+$/);
}

var ispalindrome = (s: string): boolean =>{

let j = s.length-1 ;
for(let i = 0; i< j;i++,j--){
	while(i<j && !checkAlphanumeric(s[i])){
	i++;
	}
	while(i<j && !checkAlphanumeric(s[j])){
	j--;
	}
	if(i<j && s[i].toLowerCase() !== s[j].toLowerCase())
	{
		return false;
	
	}

}
return true;

}

if(ispalindrome("nitin") == true)
{
console.log("string is palindrome");
}else
{

console.log("not palindrome")}



