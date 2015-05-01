$(document).ready(function() {

    // Search box
    //
    $('.search-link').click(function() {

        var text = $('#q').val().trim();

        if (text.length == 0)
            $('#q').focus();
        else
            $('#form').submit();
    });

    // SearchPageController
    //
    new SearchPageController(_params);
});

// SearchPageController
//
function SearchPageController(params) {

    var self = this;
    this.params = params;

    $('#category-all').click(function() { 

        self.clearCategories();
        self.clearTags();
        self.navigate();
    });
    
    $('#category-health').click(function() { 

        self.toggleCategory('Health'); 
        self.navigate();
    });

    $('#category-transportation').click(function() { 

        self.toggleCategory('Transportation'); 
        self.navigate();
    });

    $('#category-finance').click(function() { 
    
        self.toggleCategory('Finance'); 
        self.navigate();
    });

    $('#category-social-services').click(function() { 

        self.toggleCategory('Social Services'); 
        self.navigate();
    });
    
    $('#category-environment').click(function() { 

        self.toggleCategory('Environment'); 
        self.navigate();
    });

    $('#category-public-safety').click(function() { 

        self.toggleCategory('Public Safety'); 
        self.navigate();
    });
    
    $('#category-housing-and-development').click(function() { 

        self.toggleCategory('Housing & Development'); 
        self.navigate();
    });

    $('#category-infrastructure').click(function() { 

        self.toggleCategory('Infrastructure'); 
        self.navigate();
    });

    $('#category-education').click(function() { 

        self.toggleCategory('Education'); 
        self.navigate();
    });

    $('#category-recreation').click(function() { 

        self.toggleCategory('Recreation'); 
        self.navigate();
    });

    $('.pager-prev').click(function() {

        if (self.tryChangePage(-1))
            self.navigate();
    });

    $('.pager-next').click(function() {

        if (self.tryChangePage(1))
            self.navigate();
    });

    $('.tag').click(function() {

        self.applyTag($(this).text());
        self.navigate();
    });
};

// Public methods
//
SearchPageController.prototype.applyTag = function(tag) {

    this.params.tags = [ tag ]; // just apply it, do not toggle
    this.params.page = 1;
}

SearchPageController.prototype.clearCategories = function() {

    this.params.categories = [];
    this.params.page = 1;
}

SearchPageController.prototype.clearTags = function() {

    this.params.tags = [];
    this.params.page = 1;
}

SearchPageController.prototype.getSearchUrl = function() {

    var searchUrl = window.location.href.split('?')[0];
    var url = searchUrl + 
        '?q=' + encodeURIComponent($('#q').val());

    if (this.params.page > 1)
        url += '&page=' + this.params.page;

    if (this.params.categories.length > 0)
        url += '&categories=' + encodeURIComponent(this.params.categories.join(','));

    if (this.params.domains.length > 0)
        url += '&domains=' + encodeURIComponent(this.params.domains.join(','));

    if (this.params.tags.length > 0)
        url += '&tags=' + encodeURIComponent(this.params.tags.join(','));

    console.log(url);

    return url;
};

SearchPageController.prototype.navigate = function() {

    window.location.href = this.getSearchUrl();
};

SearchPageController.prototype.toggleCategory = function(category) {

    var i = this.params.categories.indexOf(category);

    if (i > -1)
        this.params.categories.splice(i, 1); // remove at index i
    else 
        this.params.categories.push(category);

    this.params.page = 1;
};

SearchPageController.prototype.tryChangePage = function(diff) {

    if ((this.params.page + diff) < 1)
        return false;

    if ((this.params.page + diff) > this.params.totalPages)
        return false;
    
    this.params.page = this.params.page + diff;
    return true;
};