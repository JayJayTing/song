import React from "react";
import { connect } from "react-redux";
function SongDetail({ song }) {
	if (!song) {
		return <div>Select a Song</div>;
	} else {
		return (
			<div>
				<h3>Details for:</h3>
				<p>
					Title: {song.title}
					<br></br>
					Duration: {song.duration}
				</p>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { song: state.selectedSong };
}
export default connect(mapStateToProps)(SongDetail);
