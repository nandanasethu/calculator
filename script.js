function btnclick(val)
    {
       
        document.getElementById("out").value+=val
    }
    
    function clearscreen()
    {
        document.getElementById("out").value=""
    }
    function equalclick()
    {
        var text=document.getElementById("out").value
        var result=eval(text)
        document.getElementById('out').value=result
    }