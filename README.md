# :smiley:SAMP (Smile At My Profile):smiley:
- We would like to build a successful web application, where users can upload their dating profile information :information_desk_person: (without personal image) to receive unbiased comments from other users :speak_no_evil:. 
- The purpose is to improve :rocket: their dating profile information. 
- We used [Firebase](https://css-tricks.com/intro-firebase-react/):fire: as our Database

- [x] Build database successfully
- [x] Map data from Backend to Frontend successfully
- [x] Save a comment to Database successfully
- [x] Delete a comment to Database successfully

### How to save a comment to Database (DB):
- Built another component, named: "Profile", to seperate data from Landing (parent page).
- Added textarea and state to the Profile.
- Used "callback function" to let the Landing page manages the storage (data). (The parent does not know which child sends the data back => so that we have to tell the parent which child sent the data via child's ID)
- Using the [update specific fields section](https://firebase.google.com/docs/database/web/read-and-write?authuser=1#update_specific_fields)
- Then console.log and Firebase's DB to check if we successful or not. 

### How to delete a comment to Database (DB):
```
   removeComment(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}/comment`);
        itemRef.remove();
    }
```

Get available emoji and code [here](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
