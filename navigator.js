import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Navigator extends React.Component {
    next = () => {
	this.setState({
	    current: (this.state.current + 1) % this.state.pages.length
	});
    }

    prev = () => {
	this.setState({
	    current: this.state.current - 1 >= 0 ? this.state.current - 1 : this.state.pages.length - 1
	});
    }

    constructor(props) {
	super(props);

	this.state = {
	    pages: (Array.isArray(props.children) ? props.children : [props.children]).map((c, i) => {
		return React.cloneElement(
		    c, {
			next: this.next,
			prev: this.prev,
			key: i
		    }
		);
	    }),
	    current: 0
	};
    }

    render() {
	return (
	    <View style={{ padding: 5, paddingTop: 20, paddingBottom: 20, flex: 1 }}>
	      {
		  this.state.pages.map((c, i) => {
		      return i == this.state.current ? c : undefined;
		  })
	      }
	    </View>
	);
    }
}
