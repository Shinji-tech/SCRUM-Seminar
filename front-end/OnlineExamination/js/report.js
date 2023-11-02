function openTab(tabName) {
    var i;
    var tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    var tabButtons = document.getElementsByClassName("tab");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active-tab");
    }
    document.getElementById(tabName + "-content").style.display = "block";
    var clickedTab = document.querySelector('.tab[data-tab="' + tabName + '"]');
    clickedTab.classList.add("active-tab");
}
