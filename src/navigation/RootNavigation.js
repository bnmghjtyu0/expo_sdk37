import * as React from "react";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
// RootNavigation.navigate('ChatScreen', { userName: 'Lucy' });

export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function resetRoot(...args) {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{ name: 'Home' }],
  });
}