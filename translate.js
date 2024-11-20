//ドメインを設定（本番環境に合わせて書き換え）
const domain = 'https://hebimalu0000.github.io';
//現在のURLを取得
const url = location.href;

//ページの読み込み終了時に実行
document.addEventListener("DOMContentLoaded", function(event) {
	//翻訳ページが表示されている場合
	if(url.match(/_x_tr_sch/)){

		//ドメイン以降のパスを取得（パラメータ含まず）
		const path = location.pathname;

		//リンク先が入っている要素を取得
		const elm_ja = document.getElementById('lang_ja');
		const elm_en = document.getElementById('lang_en');
		const elm_es = document.getElementById('lang_es');

		//日本語・英語・スペイン語それぞれの翻訳先URLをセット（ドメインまで）
		let ja_url = domain;
		let en_url = 'https://translate.google.com/translate?sl=ja&tl=en&u='+domain;
		let es_url = 'https://translate.google.com/translate?sl=ja&tl=es&u='+domain;
		
		//各URLに現在のパスを足してURLを完成させる
		ja_url = ja_url + path;
		en_url = en_url + path;
		es_url = es_url + path;
		
		//optionタグのvalueを書き換え
		elm_ja.setAttribute('value', ja_url);
		elm_en.setAttribute('value', en_url);
		elm_es.setAttribute('value', es_url);
	}
});
