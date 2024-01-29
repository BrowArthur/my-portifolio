var profileField = document.getElementById('profileField')
var profilePhoto = document.getElementById('profilePhoto')
var profileBanner = document.getElementById('profileBanner')
var profileName = document.getElementById('profileName')
var profileContent = document.getElementById('profileContent')


function openProfileField() {
    if (profilePhoto.click) {

        profileField.style.width = '384px'
        profileField.style.height = '720px'
        profileField.style.margin = '0'
        profileField.style.borderRadius = '16px'

        profileBanner.style.opacity = '100%'

        profilePhoto.style.top = '144px'
        profilePhoto.style.left = '112px'
        profilePhoto.style.width = '160px'
        profilePhoto.style.height = '160px'
        profilePhoto.style.cursor = 'default'

        profileName.style.paddingTop = '128px'
        profileName.style.fontSize = '24px'

        profileContent.style.fontSize = '16px'
    } else {
        
    }
}
function closeProfileBar() {
    if (profileField.style.width = '384px') {

        profileField.style.width = '48px'
        profileField.style.height = '48px'
        profileField.style.margin = '8px'
        profileField.style.borderRadius = '50%'

        profileBanner.style.opacity = '0%'

        profilePhoto.style.top = '0px'
        profilePhoto.style.left = '0px'
        profilePhoto.style.width = '48px'
        profilePhoto.style.height = '48px'
        profilePhoto.style.cursor = 'pointer'

        profileName.style.paddingTop = '0'
        profileName.style.fontSize = '0'
        
        profileContent.style.fontSize = '0'
    } else {

    }
}