const leftGrad =document.querySelector('#leftGrad'),
    rightGrad =document.querySelector('#rightGrad'),
    resultImg=document.querySelector('.resultImg'),
    Download_btn=document.querySelector('#Download_btn');

function backgroundGenerate(){
    resultImg.style.background=`linear-gradient(to right,${leftGrad.value},${rightGrad.value})`;

}
function DownloadImg(){
    
}
leftGrad.addEventListener('input',backgroundGenerate);
rightGrad.addEventListener('input',backgroundGenerate);

