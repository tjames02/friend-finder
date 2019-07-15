// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend (me!).
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
      Name: "Tara",
      photo: "#", 
      scores: [
          5, 
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5,
          5
      ]
    }
  ];
  
  // Note that I export the array. This makes it accessible to other files using require.
  module.exports = friendArray;