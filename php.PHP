session_start();
$_SESSION['token'] = bin2hex(random_bytes(32));
session_start();

if ($_POST['token'] !== $_SESSION['token']) {
  die("不正な送信");
}

// ここでトークン無効化（重要）
unset($_SESSION['token']);