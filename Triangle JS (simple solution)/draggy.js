Draggable.create(".triangle", {
    type: "x,y",
    edgeResistance: 0.65,
    bounds: window,
    throwProps: true,
    onPress: function(){
        $(this.target).addClass('grabbing');
        TweenMax.to(".triangle", 0.2, {
            transformOrigin: "50%",
            rotation: 6,
            ease: Power1.easeInOut,
            onComplete: function() {
                TweenMax.fromTo(
                    ".triangle",
                    0.4,
                    { transformOrigin: "50%", rotation: 8, ease: Power1.easeInOut },
                    { transformOrigin: "50%", rotation: -8, repeat: -1, ease: Power1.easeInOut, yoyo: true }
                );
            }
        });
    },
    onRelease: function(){
        $(this.target).removeClass('grabbing');
        TweenMax.to(".triangle", 0.4, {
            transformOrigin: "50%",
            rotation: 0,
            ease: Power1.easeOut
        });
    }
});
