// gpm integration
/*jshint esversion: 6 */
module.exports = (Franz) => {
    function Main() {
        try {
            Franz.setBadge(0);
        } catch (error) {
            console.log(error);
        }
    }

    Franz.loop(Main);
};