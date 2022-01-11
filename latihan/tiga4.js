let a = '';
for(let i = 1; i <= 5; i++){
    for(let j = 0; j < i; j++)
    {
        a += i;
    }
    console.log(a);
    a = '';
}