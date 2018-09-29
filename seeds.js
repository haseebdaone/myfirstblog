var mongoose = require("mongoose");
var Blog = require("./models/blogs");

var data = [
    {
        title: "Brazil",
        image: "/./images/brazil.jpg",
        description: "Morbi id quam convallis lacus sollicitudin pretium. Proin pulvinar dignissim accumsan. Cras tincidunt at mauris at finibus. Sed mollis, ante nec congue mollis, lorem purus tincidunt urna, vel blandit tellus ante vitae nunc. Vivamus in sodales mi, at ultrices risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi varius eros in laoreet gravida. Integer tristique urna nec magna tempor, a auctor nibh malesuada. Pellentesque laoreet tellus magna, sed auctor lorem sagittis sit amet. Aliquam sagittis, ante eget vulputate faucibus, purus libero aliquet enim, et tincidunt sapien libero et lacus. Sed vulputate justo eu lectus lacinia, eget hendrerit neque mollis. Sed pretium, lorem a feugiat sagittis, elit massa interdum sem, vel aliquet eros lacus nec nulla. Nunc accumsan sodales nunc ac lobortis. Phasellus id magna sit amet magna iaculis fringilla."
    },
     {
        title: "Malaysia",
        image: "/./images/malaysia.jpg",
        description: "Suspendisse at tristique lorem. Mauris gravida lacus eget erat placerat malesuada. Integer porta odio id neque feugiat, sed suscipit nunc tempus. Maecenas et sollicitudin magna, ac aliquet urna. Praesent quis libero euismod, dignissim quam congue, accumsan arcu. Etiam volutpat nibh vel purus malesuada dignissim. Pellentesque sem ex, venenatis sed hendrerit ac, faucibus nec ex. Vestibulum quis efficitur augue. Aenean egestas vel nulla eget tincidunt. Proin nec nulla vel leo efficitur bibendum scelerisque in lectus. Ut in sem arcu."
    }, 
    {
        title: "Zimbabwe",
        image: "/./images/zimbabwe.jpg",
        description: "Vivamus ultricies justo ac augue tempus, in vulputate neque vestibulum. Nunc vitae risus nec dolor blandit bibendum eget at nunc. Nulla a pulvinar turpis. Quisque mollis elit ac sem porttitor vestibulum. Nullam pretium facilisis velit, sit amet interdum erat fermentum ut. Fusce nisl lorem, pellentesque non ornare ac, mollis commodo leo. Praesent vestibulum sodales nulla, eget sollicitudin est commodo in. Integer nibh ipsum, gravida in consectetur ut, blandit ut quam. Nam convallis nisl felis, vel varius diam molestie ac. Curabitur neque lacus, eleifend et augue non, tincidunt tempor augue. Nam eleifend mi neque, id ullamcorper velit finibus non. In augue ipsum, fringilla sed nibh nec, rhoncus fringilla sapien. Proin sollicitudin feugiat erat. Sed in velit porttitor, semper tortor ac, ultrices tellus."
    }, 
    {
        title: "Vietnam",
        image: "/./images/vietnam.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus elit id mi scelerisque cursus. Maecenas porttitor velit enim, ac commodo nunc molestie non. Nulla maximus nibh a lacus semper, sit amet vestibulum nisl condimentum. Aenean scelerisque urna risus, et egestas mauris rutrum eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum laoreet id quam ut malesuada. Morbi tincidunt blandit metus sed viverra. Proin blandit egestas lacinia. Pellentesque nec iaculis ligula. Donec non leo eros. Vestibulum suscipit eleifend sapien mollis volutpat. Aliquam erat volutpat. Suspendisse mauris ante, maximus at euismod non, sodales id turpis. Suspendisse pretium est vel ante posuere, non placerat turpis posuere. Morbi vitae maximus metus, id pellentesque quam. Donec fermentum molestie sollicitudin."
    }, 
    {
        title: "Madagascar",
        image: "/./images/madagascar.jpg",
        description: "Quisque facilisis tincidunt porttitor. Integer pulvinar vel risus vitae semper. Curabitur quis orci nec felis placerat accumsan. Suspendisse erat felis, vulputate id pretium non, pellentesque eget nunc. Sed ultrices lorem a sollicitudin finibus. Sed elementum, mauris et tincidunt ultricies, metus turpis luctus arcu, vel ultrices dui urna vel nibh. Curabitur molestie, lorem nec imperdiet tincidunt, nunc est pretium neque, nec posuere massa diam eget mi. Morbi sit amet justo dignissim, sagittis neque at, condimentum nunc. Maecenas eu pulvinar ex. Curabitur quis porta arcu."
    }, 
    {
        title: "New Zealand",
        image: "/./images/newzealand.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus elit id mi scelerisque cursus. Maecenas porttitor velit enim, ac commodo nunc molestie non. Nulla maximus nibh a lacus semper, sit amet vestibulum nisl condimentum. Aenean scelerisque urna risus, et egestas mauris rutrum eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum laoreet id quam ut malesuada. Morbi tincidunt blandit metus sed viverra. Proin blandit egestas lacinia. Pellentesque nec iaculis ligula. Donec non leo eros. Vestibulum suscipit eleifend sapien mollis volutpat. Aliquam erat volutpat. Suspendisse mauris ante, maximus at euismod non, sodales id turpis. Suspendisse pretium est vel ante posuere, non placerat turpis posuere. Morbi vitae maximus metus, id pellentesque quam. Donec fermentum molestie sollicitudin."
    }
];

function seedDb(){
    Blog.remove({}, function(err){
        if(err){
            console.log(err);
        }
        data.forEach(function(element){
            Blog.create(element, function(err, doc){
                if(err){
                    console.log(err);
                } else {
                    console.log("Documents made");
                }
            });
        })
    })
}

module.exports = seedDb;
