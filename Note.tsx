//  *cacheTime : how long is it set?
//  *staleTime : use cache date and wait the staleTime to call api .
//  *refetchOnMount : true-false or "always" based on status of data that is stale or something : if true, refetch on mount if the data is stale.
//  if false = not call api when you navigate to screen, but true is the best option for this
//  *refetchOnWindowFocus : normally: when the data is changed.page can't automatically call api and update.but this configuration can do it.
//  automatically requests fresh data in the background if user leaves the app and returns to stale data.
//  the default of it is true.
//  *refetchInterval  :  can help you update data by Calling api after a period of time. this is useful for something that relate to banking or Stock.
//  *refetchIntervalInBackground : with this option and refetchInterval : is a pair. 
//  *retry:
//  ** if you just only want to call api when clicked on some button. you need to add more config for useQuery.
// some thing like that :  {enable : false}
//  * onSuccess and onError  : callback for calling api by useQuery
//  * select : be used to transform the data . but I think it is not necessary.
//  * assignment : combine polling and callbacks use refetchInterval option to pull the api data every three seconds. 
// check if the number of heroes is 4.stop polling.if it there is an error as well.stop polling
// hint for assignment : need to maintain a state variable whose initial value is 3000 and state variable will be assigned to refetchInterval configuration,
// inside the callback function check for response or error and set the value to false,that will stop the polling.//