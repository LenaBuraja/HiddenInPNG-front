import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {

	componentWillMount() {
		this.setState({
			inEncryption: true,
		});
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then((response) => (response.json()))
			.then((response) => {
				this.encryptTextArea.value = response.body;
			});
	}

	render() {
		return (
			<div id="main">
				<div id="switch">
					<div id="textSwitch" className={!this.state.inEncryption ? '' : 'switchText'}><h1>Encription</h1>
					</div>
					<div
						id="bg_filter"
						onClick={() => {
							this.setState({
								...this.state,
								inEncryption: !this.state.inEncryption,
							});
						}}
					>
						<div id="filter" className={this.state.inEncryption ? '' : 'right'}/>
					</div>
					<div id="textSwitch" className={this.state.inEncryption ? '' : 'switchText'}><h1>Decription</h1>
					</div>
				</div>
				<div id="div-encript" className={!this.state.inEncryption ? '' : 'active'}>
					<div className="image-load">
						<div className="image"/>
						<input className="submit" type="submit" value="Load image"/>
					</div>
					<div className="text-for-encript">
						<p>Enter the message text for hiding</p>
						<textarea
							className="inputText"
							rows="10"
							name="text"
							ref={(node) => {
								this.encryptTextArea = node;
							}}
						/>
						<input className="submit" type="submit" value="Load text file"/>
						<p>Enter the encryption key</p>
						<input className="inputText" type="text" name="message"/>
						<input className="submit" type="submit" value="Encript"/>
					</div>
					<div className="result">
						<div className="image"/>
						<input className="submit" type="submit" value="Save image"/>
					</div>
				</div>
				<div id="div-decript" className={this.state.inEncryption ? '' : 'active'}>
					<div className="image-load">
						<div className="image"/>
						<input className="submit" type="submit" value="Load image"/>
					</div>
					<div className="text-for-encript">
						<p>Enter the decryption key</p>
						<input className="inputText" type="text" name="message"/>
						<input className="submit" type="submit" value="Decript"/>
						<p>Extracted message</p>
						<textarea className="result" rows="10" name="text"/>
						<input className="submit" type="submit" value="Save text in file"/>
					</div>
				</div>
			</div>
		)
	}
}

render(<App/>, document.getElementById('root'));
