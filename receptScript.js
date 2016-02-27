/**
 * Created by Chisoft on 2016-02-24.
 */
/*jslint browser: true*/
/*global $, jQuery, alert*/

var yeast1 = 0.0;
var water1 = 0.0;
var sugar1 = 0.0;
var salt1 = 0.0;
var egg1 = 0.0;
var vanilla1 = 0.0;
var nutmeg1 = 0.0;
var flour1 = 0.0;
var euButter1 = 0.0;
var butter1 = 0.0;
var milk1 = 0.0;

function rangeSlider(id, onDrag) {


    var range = document.getElementById("range-slider-1"),
        dragger = range.children[0],
        draggerWidth = 10, // width of your dragger
        down = false,
        rangeWidth, rangeLeft;

    dragger.style.width = draggerWidth + 'px';
    dragger.style.left = -draggerWidth + 'px';
    dragger.style.marginLeft = (draggerWidth / 2) + 'px';

    range.addEventListener("mousedown", function(e) {
        rangeWidth = this.offsetWidth;
        rangeLeft = this.offsetLeft;
        down = true;
        updateDragger(e);
        return false;
    });

    document.addEventListener("mousemove", function(e) {
        updateDragger(e);
    });

    document.addEventListener("mouseup", function() {
        down = false;
    });

    function updateDragger(e) {
        if (down && e.pageX >= rangeLeft && e.pageX <= (rangeLeft + rangeWidth)) {
            dragger.style.left = e.pageX - rangeLeft - draggerWidth + 'px';
            if (typeof onDrag == "function") onDrag(Math.round(((e.pageX - rangeLeft) / rangeWidth) * 100));
        }
    }

}


// Run!

rangeSlider('range-slider-1', function(value) {
    if (value == 0) value = 1;
    document.getElementById('test-result').innerHTML = value + 'guest';
    document.getElementById("yeast").innerHTML = 0.25 * value;
    document.getElementById("egg").innerHTML = 1 * value;
    document.getElementById("water").innerHTML = 0.5 * value;
    document.getElementById("salt").innerHTML = 2.5 * value;
    document.getElementById("milk").innerHTML = 0.5 * value;
    document.getElementById("butter").innerHTML = 2 * value;
    document.getElementById("vanilla").innerHTML = 1 * value;
    document.getElementById("nutmeg").innerHTML = 0.125 * value;
    document.getElementById("flour").innerHTML = 1 * value;
    document.getElementById("euButter").innerHTML = 12 * value;

    document.getElementById("yeast2").innerHTML = 0.25 * value;
    document.getElementById("egg2").innerHTML = 1 * value;
    document.getElementById("water2").innerHTML = 0.5 * value;
    document.getElementById("salt2").innerHTML = 2.5 * value;
    document.getElementById("milk2").innerHTML = 0.5 * value;
    document.getElementById("butter2").innerHTML = 2 * value;
    document.getElementById("vanilla2").innerHTML = 1 * value;
    document.getElementById("nutmeg2").innerHTML = 0.125 * value;
    document.getElementById("flour2").innerHTML = 1 * value;
    document.getElementById("euButter").innerHTML = 12 * value;

    document.getElementById("euButter2").innerHTML = 6 * value;
    document.getElementById("euButter3").innerHTML = 6 * value;
});

var children;
var current;

$.fn.start = function (rating, cb) {
    "use strict";
    var length = $(this).children().length;
    children = $(this).children();
    //current index ,0 base
    current = -1;


    if (typeof (rating) === 'function') {
        cb = rating;
    } else {
        if (rating < 1 || rating > length) {
            rating = -1;
        }
    }
    //init rating
    current = rating - 1;
    for (var j = 0; j <= current; j++) {
        $(children[j]).removeClass('jr-nomal jr-rating').addClass('jr-rating');
    }
    for (var i = 0; i < length; i++) {

        $(children[i]).bind('mouseover', function (event) {
            current = $(this).index(children[i]);

            for (var j = 0; j <= current; j++) {
                $(children[j]).removeClass('jr-nomal jr-rating').addClass('jr-rating');
            }
            for (var j = current + 1; j < length; j++) {
                $(children[j]).removeClass('jr-nomal jr-rating').addClass('jr-nomal');
            }

            if (typeof(cb) === 'function') {

                cb(current + 1);
            }
        });
    }
}

$.fn.getCurrentRating = function () {
    var length = $(this).children().length;
    var children = $(this).children();
    var resulut = 0;

    for (var i = 0; i < length; i++) {
        if ($(children[i]).hasClass('jr-rating')) {
            resulut += 1;
        } else {
            break;
        }
    }
    return resulut;
}