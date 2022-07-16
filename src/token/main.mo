import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";

actor Token {
    var owner : Principal = Principal.fromText("65zmw-x3tgt-mbyk6-73xwy-g2c43-a236m-75jod-pkics-i2zog-sdgzb-3qe");
    var totalSupply : Nat = 1000000;
    var symbol : Text = "SCoin";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal) : async Nat {

        let balance : Nat = switch(balances.get(who)) {
            case null 0;
            case (?result) result;
        };

       return balance;
    };

    public query func getSymbol() : async Text {
        return symbol;
    };

    public shared(msg) func payOut() : async Text {
        // Debug.print(debug_show(msg.caller));
        if(balances.get(msg.caller) == null) {
            let amount = 100;
            balances.put(msg.caller, amount);
            return "Success";
        }
        else {
            return "Already claimed";
        }
    };
 
};