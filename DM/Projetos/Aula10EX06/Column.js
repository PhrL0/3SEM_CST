import React from "react";
import PropTypes, { func } from "prop-types";
import {View} from "react-native";
import styles from "./Styles"

export default function Column({children}){
    return <View style="styles.column">{children}</View>
}

Column.propType = {
    children: PropTypes.node.isRequired,
}