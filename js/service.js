function gerarPdf(){
    var printContents = document.getElementById('map').innerHTML;
    var originalContents = document.body.innerHTML;        
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}