function activeTab(tab){
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};

activeTab('contact');