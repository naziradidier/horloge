<script language="javascript">
today = new Date();
document.write("Nous sommes le ",today.getDate(),"/",today.getMonth()+1,"/",today.getYear(),"<br />");
document.write("Il est ",today.getHours(),":",today.getMinutes(),":",today.getSeconds(),"<br />");


<div id="horloge">&nbsp;</div>
 

function horloge()
{
    today = new Date();
 
    temps = "Nous sommes le";
    temps +=today.getDate()+"/"+today.getMonth()+"/"+today.getYear();
    temps += "Il est "
    temps +=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
 
    setTimeout("horloge()", 1000);
 
    document.getElementById("horloge").innerHTML = temps;
}
 
horloge();
</script>
