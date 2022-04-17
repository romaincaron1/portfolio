const projects = ["heartbeat", "nyscan", "le_mot_le_plus_long"];
const modals = [];

for(let i = 0; i < projects.length; i++) {
    modals.push(document.getElementById(projects[i] + "-modal"))
}

projects.forEach(project => {
    const btn = document.getElementById(project);
    const modal = document.getElementById(project + "-modal");
    const span = document.getElementById(project + "-close");

    btn.onclick = function() {
        modal.style.display = "inline-block"
    }

    span.onclick = function() {
        modal.style.display = "none"
    }
})

window.onclick = function(event) {
    modals.forEach(modal => {
        if(event.target == modal) {
            modal.style.display = "none";
        }
    })
}