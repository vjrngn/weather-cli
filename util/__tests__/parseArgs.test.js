const { parseArgs } = require("..");

describe("parseArgs()", () => {
  it("parses arguments", () => {
    const command = ["today"];
    const parsed = parseArgs(command);

    expect(parsed.arguments).toBe("today");
  });

  it("parses options", () => {
    const command = ["today", "--location=bangalore"];
    const parsed = parseArgs(command);

    expect(parsed).toEqual({
      arguments: "today",
      options: {
        location: "bangalore",
      },
    });
  });

  it("boolean options are cast correctly", () => {
    const command = ["today", "--username=foo", "--email=true"];
    const parsed = parseArgs(command);

    expect(parsed).toEqual({
      arguments: "today",
      options: {
        username: "foo",
        email: true,
      },
    });
    expect(typeof parsed.options.email).toBe("boolean");
  });
});
