var app=angular.module('myapp',[]);
    app.controller('CartForm', function($scope)
    {
        $scope.cart = {
            items: [{ Qty: '', Description: '', Cost: ''}]
        }

        $scope.additem = function()  {
            $scope.cart.items.push({ Qty: '', Description: '', Cost: ''});
        }

        $scope.removeItem = function(index) {
            $scope.cart.items.splice(index, 1);
    }

    $scope.total =function() {
        var total = 0;
        angular.forEach($scope.cart.items, function(item) {
            total += item.Qty * item.Cost * item.Gst;
    })
        return total;
    }
}
); 