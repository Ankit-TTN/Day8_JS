copyInfoOfObject = () => {
    alert('open console for result');
    let trainee = { id: '3997', competency: 'AMC' };
    let copyObj = {...trainee };
    console.log('Original Object', trainee);
    console.log('Copied Object', copyObj);

}