'use strict';

$(document).ready(function () {

    // Search page controller
    //
    var searchPageController = new SearchPageController(_params);

    // Main search box
    //
    new AutoSuggestRegionController('#q', '.region-list', function (region) {

        searchPageController.setAutoSuggestedRegion(region, true);
        searchPageController.navigate();
    });

    // Chart column
    //
    if (_params.regions.length > 0) {

        switch (_params.vector) {

            case 'population':
                searchPageController.drawPopulationData();
                break;

            case 'earnings':
                searchPageController.drawEarningsData();
                break;

            case 'education':
                searchPageController.drawEducationData();
                break;

            case 'occupations':
                searchPageController.drawOccupationsData();
                break;

            case 'cost_of_living':
                searchPageController.drawCostOfLivingData();
                break;

            case 'gdp':
                searchPageController.drawGdpData();
                break;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Y0LXNlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBVzs7OztBQUl6QixRQUFJLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDOzs7O0FBQUMsQUFJN0QsUUFBSSwyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFVBQVMsTUFBTSxFQUFFOztBQUVuRSw0QkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUQsNEJBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDbkMsQ0FBQzs7OztBQUFDLEFBSUgsUUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O0FBRTVCLGdCQUFRLE9BQU8sQ0FBQyxNQUFNOztBQUVsQixpQkFBSyxZQUFZO0FBQ2Isb0NBQW9CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUMxQyxzQkFBTTs7QUFBQSxBQUVWLGlCQUFLLFVBQVU7QUFDWCxvQ0FBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3hDLHNCQUFNOztBQUFBLEFBRVYsaUJBQUssV0FBVztBQUNaLG9DQUFvQixDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDekMsc0JBQU07O0FBQUEsQUFFVixpQkFBSyxhQUFhO0FBQ2Qsb0NBQW9CLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUMzQyxzQkFBTTs7QUFBQSxBQUVWLGlCQUFLLGdCQUFnQjtBQUNqQixvQ0FBb0IsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQzVDLHNCQUFNOztBQUFBLEFBRVYsaUJBQUssS0FBSztBQUNOLG9DQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25DLHNCQUFNO0FBQUEsU0FDYjtLQUNMO0NBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6InY0LXNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gU2VhcmNoIHBhZ2UgY29udHJvbGxlclxuICAgIC8vXG4gICAgdmFyIHNlYXJjaFBhZ2VDb250cm9sbGVyID0gbmV3IFNlYXJjaFBhZ2VDb250cm9sbGVyKF9wYXJhbXMpO1xuXG4gICAgLy8gTWFpbiBzZWFyY2ggYm94XG4gICAgLy9cbiAgICBuZXcgQXV0b1N1Z2dlc3RSZWdpb25Db250cm9sbGVyKCcjcScsICcucmVnaW9uLWxpc3QnLCBmdW5jdGlvbihyZWdpb24pIHtcblxuICAgICAgICBzZWFyY2hQYWdlQ29udHJvbGxlci5zZXRBdXRvU3VnZ2VzdGVkUmVnaW9uKHJlZ2lvbiwgdHJ1ZSk7XG4gICAgICAgIHNlYXJjaFBhZ2VDb250cm9sbGVyLm5hdmlnYXRlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBDaGFydCBjb2x1bW5cbiAgICAvL1xuICAgIGlmIChfcGFyYW1zLnJlZ2lvbnMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIHN3aXRjaCAoX3BhcmFtcy52ZWN0b3IpIHtcblxuICAgICAgICAgICAgY2FzZSAncG9wdWxhdGlvbic6XG4gICAgICAgICAgICAgICAgc2VhcmNoUGFnZUNvbnRyb2xsZXIuZHJhd1BvcHVsYXRpb25EYXRhKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlICdlYXJuaW5ncyc6XG4gICAgICAgICAgICAgICAgc2VhcmNoUGFnZUNvbnRyb2xsZXIuZHJhd0Vhcm5pbmdzRGF0YSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSAnZWR1Y2F0aW9uJzpcbiAgICAgICAgICAgICAgICBzZWFyY2hQYWdlQ29udHJvbGxlci5kcmF3RWR1Y2F0aW9uRGF0YSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdvY2N1cGF0aW9ucyc6XG4gICAgICAgICAgICAgICAgc2VhcmNoUGFnZUNvbnRyb2xsZXIuZHJhd09jY3VwYXRpb25zRGF0YSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjb3N0X29mX2xpdmluZyc6XG4gICAgICAgICAgICAgICAgc2VhcmNoUGFnZUNvbnRyb2xsZXIuZHJhd0Nvc3RPZkxpdmluZ0RhdGEoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgJ2dkcCc6XG4gICAgICAgICAgICAgICAgc2VhcmNoUGFnZUNvbnRyb2xsZXIuZHJhd0dkcERhdGEoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgfVxufSk7XG4iXX0=
//# sourceMappingURL=v4-search.js.map