// KPOPページのタブメニュー
document.addEventListener('DOMContentLoaded', () => {
  // タブメニューを初期化する関数
  const initializeTabs = (containerId) => {
      const container = document.getElementById(containerId); // -- タブメニューコンテナを取得 --
      const tabs = container.querySelectorAll('.tab-link'); // -- すべてのタブリンクを取得 --
      const panes = container.querySelectorAll('.tab-pane'); // -- すべてのタブペインを取得 --

      tabs.forEach(tab => {
          tab.addEventListener('click', () => {
              const target = container.querySelector(`#${tab.getAttribute('data-tab')}`); // -- クリックされたタブの対応するタブペインを取得 --

              // すべてのタブとコンテンツから 'active' クラスを削除
              tabs.forEach(t => t.classList.remove('active')); // -- すべてのタブリンクから 'active' クラスを削除 --
              panes.forEach(p => p.classList.remove('active')); // -- すべてのタブペインから 'active' クラスを削除 --

              // クリックされたタブとその対応するコンテンツに 'active' クラスを追加
              tab.classList.add('active'); // -- クリックされたタブリンクに 'active' クラスを追加 --
              target.classList.add('active'); // -- 対応するタブペインに 'active' クラスを追加 --
          });
      });
  };

  // 各タブメニューコンテナを初期化
  initializeTabs('tab-container-1'); // -- 最初のタブメニューコンテナを初期化 --
  initializeTabs('tab-container-2'); // -- 二番目のタブメニューコンテナを初期化 --
});

document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('data-tab');
      
      // タブリンクのアクティブ状態を更新
      tabLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');

      // タブコンテンツのアクティブ状態を更新
      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });
});
