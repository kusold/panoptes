const Search = props => (
	<div className="search">
		<form method="GET" action="https://duckduckgo.com" acceptCharset="UTF-8">
			<div>
				<input placeholder="DuckDuckGo search..." name="q" type="text" />
				<button type="submit">Search</button>
			</div>
		</form>
		<style jsx>{`
			div.search {
				display: flex;
				align-self: flex-start;
				text-align: center;
				margin: 50px auto;
				padding: 14px;
				background: rgba(0, 0, 0, 0.2);
				border-radius: 14px;
				box-shadow: inset 0px 1px 6px 0 rgba(0, 0, 0, 0.3);
				border-top: 1px solid rgba(0, 0, 0, 0.5);
				border-bottom: 1px solid rgba(255, 255, 255, 0.35);
				position: relative;
				width: 100%;
				max-width: 500px;
			}
			form {
				width: 100%;
			}
			form > div {
				background: white;
				border-radius: 5px;
				box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.4);
				overflow: hidden;
				position: relative;
			}
			div > input {
				background: transparent;
				border: 0 none;
				color: #000;
				font-size: 15px;
				padding: 17px 15px;
				width: 100%;
			}
			div > button {
				position: absolute;
				right: 0px;
				top: 0px;
				border: none;
				font-size: 16px;
				padding: 7px 15px;
				line-height: 38px;
				font-weight: 500;
				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;
				color: white;
				text-transform: uppercase;
				background: #d64d55;
			}
		`}</style>
	</div>
);

export default Search;
