const btn=document.querySelector('.btn');
const inp=document.querySelector('#inp');
const form=document.querySelector("form");
const body=document.querySelector('body');


btn.addEventListener('click', async (evt) =>{
    evt.preventDefault();
    console.log("submitted");
    console.dir(evt);
    const search=form.elements.q.value;
    const res=await axios(`https://api.tvmaze.com/search/shows?q=${search}`);
    for(let i=0;i<res.data.length;i++){
    const url=res.data[i].show.image.medium;
    const imag=document.createElement('img');
    imag.src=url;
    imag.class="image"
    body.append(imag);
    
    }
})