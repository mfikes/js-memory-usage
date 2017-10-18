defmodule Test do
  import Node

  def fill(cnt, obj, f) do
    Enum.reduce(1..cnt, obj, f)
  end

  def listSet(i, l) do
    [i] ++ l
  end

  def setSet(i, s) do
    MapSet.put(s, i)
  end

  def mapSet(i, m) do
    Map.put(m, "key-" <> Integer.to_string(i), i)
  end

  def start(_, _) do

    Node.record("empty list", 1000, fn() -> Test.fill(10, [], &Test.listSet/2) end)
    Node.record("empty map", 1000, fn() -> Test.fill(10, %{}, &Test.mapSet/2) end)
    Node.record("empty set", 1000, fn() -> Test.fill(10, MapSet.new, &Test.setSet/2) end)

    Node.record("100 items list", 1000, fn() -> Test.fill(100, [], &Test.listSet/2) end)
    Node.record("100 items map", 1000, fn() -> Test.fill(100, %{}, &Test.mapSet/2) end)
    Node.record("100 items set", 1000, fn() -> Test.fill(100, MapSet.new, &Test.setSet/2) end)

    Node.record("1000 items list", 1000, fn() -> Test.fill(1000, [], &Test.listSet/2) end)
    Node.record("1000 items map", 1000, fn() -> Test.fill(1000, %{}, &Test.mapSet/2) end)
    Node.record("1000 items set", 1000, fn() -> Test.fill(1000, MapSet.new, &Test.setSet/2) end)

    Node.printResult()
  end

end