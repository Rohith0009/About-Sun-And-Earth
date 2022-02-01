var sun = [
  "https://image.shutterstock.com/image-photo/heatwave-hot-sun-climate-change-260nw-1152324746.jpg",
  "https://i.natgeofe.com/n/60eb5936-94ff-484c-90c8-a3e2e96798c8/6594.jpg",
  "https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-f7g4ahl5gc3b1fhn4ff72vr0e6-20180406114314.Medi.jpeg",
  "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

var i = 0;
function sungallery() {
  document.getElementById("sgallery").src = sun[i];
  i++;
  if (i == 4) {
    i = 0;
  }
}

var earth = [
  "https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s800-c85.jpg",
  "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ.jpg",
  "https://www.independent.ie/business/technology/tech-gaming/d491a/34478065.ece/AUTOCROP/w620/click_online_34588_0",
  "https://images.theconversation.com/files/371537/original/file-20201126-21-1cqqr5f.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  "https://thumbs.dreamstime.com/z/planet-earth-isolated-white-elements-image-furnished-nasa-planet-earth-isolated-164214539.jpg",
];

var a = 0;
function earthgallery() {
  document.getElementById("egallery").src = earth[a];
  a++;
  if (a == 4) {
    a = 0;
  }
}
