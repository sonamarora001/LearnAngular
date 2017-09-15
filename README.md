# hello-world
<!--
AngularJS : Auto Bootstrapping :



Bootstrapping is the equivalent of initializing, or starting, your Angular app. There are 2 main ways to do so.

The first is automatically bootstrapping by adding ng-app to the an element in your HTML, like so:

<html ng-app="myApp">
...
</html>

The second would be to bootstrap from the JavaScript, like so, after having creating your app through angular.module("myApp", []);

angular.bootstrap(document, ['myApp']);



Angular initializes / bootstraps automatically upon DOMContentLoaded event or when the angular.js script is downloaded to the browser and the document.readyState is set to complete. At this point AngularJS looks for the ng-app directive. When the ng-app directive is found then Angular will:

    Load the module associated with the directive.

    Create the application injector.

    Compile the DOM starting from the ng-app root element.

This process is called auto-bootstrapping.




-->
