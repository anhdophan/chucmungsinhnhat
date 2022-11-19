// JavaScript source code
var btnopen = document.querySelector('.btn-open')
var model = document.querySelector('.model')
var btnclose = document.querySelector('.model-footer button')


function toggleModel(e) {
    console.log(e.target);
    model.classList.toggle('hide')
}

btnopen.addEventListener('click', toggleModel)
btnclose.addEventListener('click', toggleModel)
model.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleModel()
    }
})





