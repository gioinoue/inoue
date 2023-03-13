var hora = 10

if(hora < 12)
{
    console.log('Bom dia!!!')
}
else 
{
    console.log('Boa Tarde ou Boa Noite')
}

//

if(hora < 12)
{
    console.log('Bom dia!!!')
}
else 
    if (hora < 18)
    {
        console.log('Boa Tarde')
    }
    else
        if (hora < 24)
        {
            console.log('Boa noite')
        }
