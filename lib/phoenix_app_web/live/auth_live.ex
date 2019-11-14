defmodule PhoenixAppWeb.AuthLive do
  use Phoenix.LiveView
  alias PhoenixAppWeb.AuthView

  def mount(_session, socket) do
    {:ok, socket}
  end

  def render(assigns) do
    AuthView.render("index.html", assigns)
  end

  def handle_event("signup", %{"signup" => signup}, socket) do
    IO.inspect "teste"
    IO.inspect signup
    {:noreply, socket}
  end

end