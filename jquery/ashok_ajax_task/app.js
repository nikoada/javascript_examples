
var UserComments = function(){


  return{

    init: function(){
      // bind all actions
      UserComments.actions.showOnly();

      jQuery('#users').on('click', function(){
        jQuery('a[class$="active"]').removeClass('active');
        jQuery(this).addClass('active');
        UserComments.actions.showOnly('.usersContent');
        UserComments.actions.loadUsers();
      });

      jQuery('#comments').on('click', function(){
        jQuery('a[class$="active"]').removeClass('active');
        jQuery(this).addClass('active');
        UserComments.actions.showOnly('.commentsContent');
        UserComments.actions.loadComments();

      });

      jQuery('#addUser').on('click', function(){
        jQuery('a[class$="active"]').removeClass('active');
        jQuery(this).addClass('active');
        UserComments.actions.showOnly('.addUserContent');

      });

      jQuery('#addComment').on('click', function(){
        jQuery('a[class$="active"]').removeClass('active');
        jQuery(this).addClass('active');
        UserComments.actions.showOnly('.addCommentsContent');

      });

    },

    actions: {
      loadUsers: function(){
        // users ajax got request
        jQuery.ajax({
                  url: 'http://cileria.com:3050/users',
                  type: 'GET',
                  dataType: 'json',
                  contentType: 'application/json; charset=utf-8',
                  beforeSend: function(jQXhr, settings){
                    jQuery('')
                  },
                  success: function(data, textStatus, jQXhr) {
                      UserComments.loadTable(data);
                  },
                  error: function(data, textStatus, jQXhr){
                    console.log('Failed to get users! Message:' + jQXhr.statusText);
                    console.log('')
                  },
                  complete: function(data, textStatus){

                  }
                  });
      },

      loadComments: function(){
        // comments ajax got request
        jQuery.ajax({
                  url: 'http://cileria.com:3050/comments',
                  type: 'GET',
                  dataType: 'json',
                  success: function(response) {
                      UserComments.loadComments(response);
                      }

                  });
      },
      showOnly: function(classNameParam){
        jQuery('.usersContent').hide();
        jQuery('.commentsContent').hide();
        jQuery('.addUserContent').hide();
        jQuery('.addCommentsContent').hide();
        jQuery(classNameParam).show();
      }
    }, //end actions

    createUser: function(){
      // createUser ajax post request
    },
    loadTable: function(objParam){
      // loads table with data from server
      jQuery.each(objParam, function(index, value){
         $('tbody').append('<tr><th scope="row">' + (index+1) + '</th><td>' + value.name + '</td><td>' + value.email + '</td></tr>');
    });

    },
    loadComments: function(objParam){
      // loads table with data from server
      jQuery.each(objParam, function(index, value){
         $('.commentsContent').append('<h2 class="user_name" style="color:lightblue;">' + value.name + '</h2><h4 class="user_email">'
          + value.email + '</h4><p class="user_comment">' + value.body + '</p>');
       });
    }

  // end of action

}; // end of return

}; // end of UserComments IIF

UserComments = UserComments();

jQuery(document).ready(function($){

  UserComments.init();

});
